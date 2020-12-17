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

  });