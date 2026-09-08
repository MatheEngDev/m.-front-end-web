export function configurarFeedback() {
  const botaoToast = document.getElementById("btnToast");
  const toast = document.getElementById("toast");

  if (!botaoToast || !toast) {
    return;
  }

  botaoToast.addEventListener("click", function () {
    toast.classList.add("show");

    setTimeout(function () {
      toast.classList.remove("show");
    }, 3000);
  });
}
