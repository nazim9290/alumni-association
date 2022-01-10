import Swal from "sweetalert2";

export default function SweetAlert(titleText, icons = "success") {
  Swal.fire({
    position: "center",
    icon: icons,
    title: titleText,
    showConfirmButton: false,
    timer: 2000,
  });
}
