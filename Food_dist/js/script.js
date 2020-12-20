  window.addEventListener('DOMContentLoaded', () => {


      /*Home Work #1 - Tabs
    - Скрыть неактуальный контент вкладок
    - Показать актуальный контент вкладок (по выбору)
    - добавили анимации с помощью classList 
    - Style.css - added (inline)
    .show{display:block}
    .hide{display:none}
    .fade{animation-name: fade; animation-duration: 1.5s;}@keyframes fade{from{opacity: 0.1;}to{opacity: 1;}}
*/
      const tabParent = document.querySelector('.tabheader__items'),
          tabs = document.querySelectorAll('.tabheader__item'),
          tabcontent = document.querySelectorAll('.tabcontent');

      function hideTabContent() {
          tabcontent.forEach(item => {
              //item.style.display = 'none';
              item.classList.add('hide');
              item.classList.remove('show', 'fade');
          });
          tabs.forEach(item => {
              item.classList.remove('tabheader__item_active');
          });
      }

      function showTabContent(i = 0) {
          //tabcontent[i].style.display = 'block';
          tabcontent[i].classList.add('show', 'fade');
          tabcontent[i].classList.remove('hide');

          tabs[i].classList.add('tabheader__item_active');
      }

      tabs.forEach((item, i) => {
          item.addEventListener('click', (event) => {
              hideTabContent();
              showTabContent(i);
          });
      });

      tabParent.addEventListener('click', (event) => {
          const target = event.target;

          if (target && target.classList.contains('tabheader__item')) {
              tabs.forEach((item, i) => {
                  if (target == item) {

                  }
              });
          }

      });

      hideTabContent();
      showTabContent();

      //Timer

      const deadLine = '2020.12.27';

      function getTimeRemaining(endTime) {
          const total = Date.parse(deadLine) - Date.parse(new Date()),
              days = Math.floor(total / (1000 * 60 * 60 * 24)),
              hours = Math.floor(total / (1000 * 60 * 60) % 24),
              minutes = Math.floor(total / (1000 * 60) % 60),
              seconds = Math.floor(total / 1000 % 60);

          return {
              total,
              days,
              hours,
              minutes,
              seconds
          };
      }

      function addZero(num) {
          if (num < 10 && num > 0) {
              return `0${num}`;
          } else {
              return num;
          }
      }

      function setClock(selector, endTime) {
          const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

          updateClock();

          function updateClock() {
              const timeLeft = getTimeRemaining(endTime);

              days.innerHTML = addZero(timeLeft.days);
              hours.innerHTML = addZero(timeLeft.hours);
              minutes.innerHTML = addZero(timeLeft.minutes);
              seconds.innerHTML = addZero(timeLeft.seconds);

              if (timeLeft.total <= 0) {
                  clearInterval(timeInterval);
              }
          }
      }

      setClock('.timer', deadLine);

      // Modal window

      const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');

      function openModal() {
          modal.classList.add('show');
          modal.classList.remove('hide');
          document.body.style.overflow = 'hidden'; //блочит бэкграунд
          clearInterval(modalTimerId);
        }

      function closeModal() {
          modal.classList.remove('show');
          modal.classList.add('hide');
          document.body.style.overflow = ''; //анлочит бэкграунд
      }

      modalTrigger.forEach(btn => {
          btn.addEventListener('click', () => {
              openModal();
          });
      });

      modalCloseBtn.addEventListener('click', closeModal);

      modal.addEventListener('click', (e) => {
          if (e.target === modal) {
              closeModal();
          }
      });

      document.addEventListener('keydown', (e) => {
          if (e.code === "Escape" && modal.classList.contains('show')) {
              closeModal();
          }
      });

      const modalTimerId = setTimeout(openModal, 3000);

      function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
      }

      window.addEventListener('scroll', showModalByScroll);


// Classes in Menu card

      // Создаем класс конструктор карточки меню
      class MenuCard {
          constructor(src, alt, title, descr, price, parentSelector, ...classes) {
              this.src = src;
              this.alt = alt;
              this.title = title;
              this.descr = descr;
              this.price = price;
              this.classes = classes; //array
              this.parent = document.querySelector(parentSelector);
              this.course = 27.5;
              this.changeToUAH();
          }

          changeToUAH() {
              this.price = this.price * this.course;
          }

          // первращаем с помощью render в HTML
          render() {
              const element = document.createElement('div');
              if (this.classes.length === 0) {
                  this.element = 'menu__item';
                  element.classList.add(this.element);
              } else {
                this.classes.forEach(className => element.classList.add(className));
              }

              element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        
            `;
            // Добавляем блок в конец родительского класса
              this.parent.append(element);
          }
      }

      // Создаем обьекты класса
      new MenuCard(
          "img/tabs/vegy.jpg",
          "vegy",
          'Меню "Фитнес"',
          'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
          8,
          ".menu .container",
          'menu__item',
          'big'
      ).render(); // первращаем с помощью render в HTML

      new MenuCard(
          "img/tabs/elite.jpg",
          "elite",
          'Меню “Премиум”',
          'Меню "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
          20,
          ".menu .container",
          'menu__item',
          
      ).render();


      new MenuCard(
          "img/tabs/post.jpg",
          "post",
          'Меню "Постное"',
          'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
          16,
          ".menu .container",
          'menu__item',
          
      ).render();

        // Forms

        const forms = document.querySelectorAll('form');

        // создаем обьект с сообщениями (статуса реквеста)
        const message = {
            loading: 'loading',
            success: 'success',
            failure: 'failure',
            };

        forms.forEach(form => {
            postData(form);
        });

        function postData (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

            const statusMessage = document.createElement('div'); // создаем блок с сообщением
                statusMessage.classList.add('status'); // добавляем класс к созданному блоку
                statusMessage.textContent = message.loading; // добавляем отображаемый текст в блок
                form.append(statusMessage); // Пушим созданный блок в конец form

            // создаем запрос XMLHttpRequest
            const request = new XMLHttpRequest();

            // формируем запрос (что, куда)
            request.open('POST', 'server.php');

            // устанавливает заголовок запроса (уточняет детали)
            request.setRequestHeader('Content-type', 'application/json');

            // создаем FormData которая будет содержать елементы формы
            const formData = new FormData(form),
                  formDataObject = {}; // создаем пустой обьект который заполним датой из FormData

                  // заполняем обьект елементами FormData
            formData.forEach((item, i) => {
                formDataObject[i] = item;
            });

            // конвертируем обьект в читабельный для JSON
            const dataToSend = JSON.stringify(formDataObject);

            // Отправляем запрос сконвертированый обьект
            request.send(dataToSend);

            // Отслжеиваем статус реквеста 
            request.addEventListener('load', () => {
                if (request.status === 200) {
                    statusMessage.textContent = message.success;
                } else {
                    statusMessage.textContent = message.success.failure;
                }
            });

            form.reset();
            
        });
    }


      /*  Server.php
         function postData(form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                const statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                statusMessage.textContent = message.loading;
                form.append(statusMessage);

                const request = new XMLHttpRequest();
                request.open('POST', 'server.php');

                //request.setRequestHeader('Content-type', 'multipart/form-data');
                // Заголовок не нужен между обьектом formData
                const formData = new FormData(form);

                request.send(formData);

                request.addEventListener('load', () => {
                    if (request.status === 200) {
                        console.log(request.response);
                        statusMessage.textContent = message.success;
                        form.reset();
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 1000);
                    } else {
                        statusMessage.textContent = message.failure;
                    }
                });
            });
        } */

  });