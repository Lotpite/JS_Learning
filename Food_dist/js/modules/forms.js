import {openModal, closeModal} from './modal';
import {postData} from '../services/services';

function forms(formSelector, modalTimerId) {

// Forms

const forms = document.querySelectorAll(formSelector);

// создаем обьект с сообщениями (статуса реквеста)
const message = {
    loading: 'img/form/spinner.svg',
    success: 'success',
    failure: 'failure',
};

forms.forEach(form => {
    bindPostData(form);
});

function bindPostData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const statusMessage = document.createElement('img'); // создаем блок с сообщением
        statusMessage.src = message.loading; // добавляем класс к созданному блоку
        statusMessage.style.cssText = ` 
                display: block;
                margin: 0 auto;
            `;
        //statusMessage.textContent = message.loading; // добавляем отображаемый текст в блок
        // form.append(statusMessage); // Пушим созданный блок в конец form
        form.insertAdjacentElement('afterend', statusMessage);


        // создаем FormData которая будет содержать елементы формы
        const formData = new FormData(form),
            formDataObject = {}; // создаем пустой обьект который заполним датой из FormData

        // (formData to array, array to object) to JSON
        const jsonObject = JSON.stringify(Object.fromEntries(formData.entries()));


        postData('http://localhost:3000/requests', jsonObject)
            .then(data => {
                console.log(data);
                thanksModal(message.success);
                statusMessage.remove();
                form.reset();
            })
            .catch(() => { // catch если ошибка
                statusMessage.textContent = message.failure;
            });
    });
}

// Thanks modal
function thanksModal(message) {

    const previousModal = document.querySelector('.modal__dialog');
    previousModal.classList.add('hide');
    openModal('.modal', modalTimerId);

    const newModalDialog = document.createElement('div');
    newModalDialog.classList.add('modal__dialog');
    newModalDialog.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>&times;</div>
            <div class="modal__title">${message}</div>
        </div>
        `;

    document.querySelector('.modal').append(newModalDialog);

    setTimeout(() => {
        newModalDialog.remove();
        previousModal.classList.add('show');
        previousModal.classList.remove('hide');
        closeModal('.modal');
    }, 4000);
}

}

export default forms;