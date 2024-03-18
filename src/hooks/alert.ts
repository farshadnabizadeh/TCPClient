import Swal from 'sweetalert2'
export const showAlert = (title:any) => {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: title,
      showConfirmButton: false,
      timer: 1500
    });
  }