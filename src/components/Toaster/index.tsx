import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-right',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.stopTimer);
  }
});

export const notifySuccess = (text: string) => {
  Toast.fire({
    icon: 'success',
    title: text,
    background: '#276e2f',
    color: 'white',
    iconColor: 'white'
  });
};

export const notifyInfo = (text: string) => {

};

export const notifyWarn = (text: string) => { 
  Toast.fire({
    icon: 'warning', 
    title: text,
    background: '#FF8518',
    color: 'white',
    iconColor: 'white' 
  });
};

export const notifyError = (text: string) => {
  Toast.fire({
    icon: 'error',
    title: text,
    background: '#a33c36',
    color: 'white',
    iconColor: 'white' 
  });
};
