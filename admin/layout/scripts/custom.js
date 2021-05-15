function showPerPageRecord(record) {
    setGetParameter("perPage",record);
}

function setGetParameter(paramName, paramValue)
{
    var url = window.location.href;
    var hash = location.hash;
    url = url.replace(hash, '');
    if (url.indexOf(paramName + "=") >= 0)
    {
        var prefix = url.substring(0, url.indexOf(paramName));
        var suffix = url.substring(url.indexOf(paramName));
        suffix = suffix.substring(suffix.indexOf("=") + 1);
        suffix = (suffix.indexOf("&") >= 0) ? suffix.substring(suffix.indexOf("&")) : "";
        url = prefix + paramName + "=" + paramValue + suffix;
    }
    else
    {
    if (url.indexOf("?") < 0)
        url += "?" + paramName + "=" + paramValue;
    else
        url += "&" + paramName + "=" + paramValue;
    }
    window.location.href = url + hash;
}


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#profile_photo').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$(document).on("click", ".filter-cancel", function(e) {
    var element = $(this);
    e.preventDefault();
    swal({
            title: "Are you sure want to delete?",
            text: "You will not be able to recover this record!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, I am sure!',
            cancelButtonText: "No, cancel it!"

        }).then((result) => {
            if (result.value) {
                var form = element.parent('form').get(0);
                form.submit();
            } else if (
                result.dismiss === swal.DismissReason.cancel
            ) {
                swal(
                  'Cancelled',
                  'Your imaginary file is safe',
                  'error'
                )
            }
        });
});

function AlertMessageTimer(type, title, message) {
    swal({
        title: title,
        text: message,
        type: type,
        timer: 3500,
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonText:'Ok'
    });
}