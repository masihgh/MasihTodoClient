import Swal from 'sweetalert2'
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})
const swalError = Swal.mixin({
  text: '5.x.x Server Error',
  icon: 'error',
  toast: true,
  timerProgressBar: true,
  timer: 3000,
  position: 'top-end',
  showConfirmButton: false
})

const swalOk = Swal.mixin({
  icon: 'success',
  toast: true,
  timerProgressBar: true,
  timer: 5000,
  position: 'top-end',
  showConfirmButton: false
})

const swalCreating = Swal.mixin({
  title: 'Creating...',
  icon: 'info',
  toast: true,
  timerProgressBar: true,
  position: 'top-end',
  showConfirmButton: false
})

export default {swalWithBootstrapButtons,swalError,swalOk,swalCreating}