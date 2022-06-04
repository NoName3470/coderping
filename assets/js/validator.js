const userName = document.querySelector('#name')
const passWord = document.querySelector('#password')
const form = document.querySelector('#form-login')
const btn = document.querySelector('.form-login__submit')
const listInput = document.querySelectorAll('.input')
// Hàm hiển thị lỗi
function showErorr (input, message) {
     let parent = input.parentElement
     let small = parent.querySelector('.messager__error')
     input.classList.add('error')
     small.innerHTML = message
}
// Hàm hiển thị thành công
function showSucces (input) {
     let parent = input.parentElement
     let small = parent.querySelector('.messager__error')
     input.classList.remove('error')
     small.innerHTML = ' '
}
// Hàm kiểm tra giá trị của input
function checkInput (listInput) {
     let isEmptyErorr = true;
     console.log(listInput)
     listInput.forEach( function (input) {
          input.value = input.value.trim()
          if (!input.value) {
               isEmptyErorr = false;
               showErorr(input, 'Vui long nhap')
          }else {
               showSucces(input)
          }
     });
     return isEmptyErorr
}

/// Hàm độ dài tối thiểu và tối đa của các thẻ input
function checkLength (input, min, max) {
     input.value = input.value.trim()
     if (input.value.length < min) {
          showErorr(input,'khong du ki tu')
          return true
     }else if (input.value > max) {
          showErorr(input, 'qua ki tu')
          return true
     }
     showSucces(input)
     return false
}
// Hamf foucus 
function focusInput (listInput) {
     listInput.forEach( input => {
          console.log(input)
          input.addEventListener('focus', e => {
               showSucces(input)
          })
     })
}
// Event submit form
form.addEventListener('submit', e => {
     e.preventDefault()
     console.log(checkInput([ userName, passWord]))
     if (!checkInput([ userName, passWord])) {
          checkLength(userName, 3, 10)
          checkLength(passWord, 3, 10) 
     }
     focusInput(listInput)

})

