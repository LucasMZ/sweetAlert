
    function clicouA(){
    swal.fire({
        title: "Bom trabalho!",
        text: "Voce clicou no botão",
        icon: "success",
      });
    }
 function clicouV(){
Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Algo de errado aconteceu!',
    footer: '<a href="https://youtube.com">Por que voce teve esse erro?</a>'
  });
} 
function clicouAm(){
    Swal.fire({
        title: 'Digite sua conta do github',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Request failed: ${error}`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          })
        }
      })
}