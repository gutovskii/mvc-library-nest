$(() => {
    $('.logout').click(() => {
        fetch('http://localhost:3000/admin/logout', {
            method: 'POST'
        })
        .then(res => {
            if (res.status === 401) {
                location.href = '/';
            }
        });
    });

    $('.btn-danger').on('click', function(e) {
        const bookId = this.dataset.bookId;
        
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              fetch('http://localhost:3000/admin/api/v1/delete/' + bookId, {
                method: 'POST'
              })
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              ).then(() => {
                  location.reload();
              })
            }
          })
    })

    $('#Image').on('change', function(e) {
        const reader = new FileReader();
        reader.readAsDataURL(this.files[0])
        reader.onload = function() {
            $('.bookImage').remove();
            const img = new Image();
            img.src = reader.result;
            img.height = 200;
            img.classList.add('bookImage', 'mt-3');
            $('.custom-file-button').append(img);
        }
    })
})
