$(document).ready(async function () {

    // Init
    $('.image-section').hide();
    $('.loader').hide();
    $('#result1').hide();
    $('#result2').hide();
    $('#result3').hide();

    let net;

    // Upload Preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').attr("src", e.target.result).hide().fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imageUpload").change(function () {

        $('.image-section').show();
        $('#btn-predict').show();
        $('#result1').text('').hide();
        $('#result2').text('').hide();
        $('#result3').text('').hide();
        readURL(this);
    });

    // Predict
    $('#btn-predict').click(async function () {

        // Show loading animation
        $(this).hide();
        $('.loader').show();

        // loading mobilenet
        net = await mobilenet.load();
        console.log('Model loaded');

        // Make a prediction through the model on our image.
        const imgEl = document.getElementById('imagePreview');
        const result = await net.classify(imgEl);

        $('.loader').hide();
        $('#result1').fadeIn(600).text(result[0].className + '  -   ' + result[0].probability.toFixed(3));
        $('#result2').fadeIn(600).text(result[1].className + '  -   ' + result[1].probability.toFixed(3));
        $('#result3').fadeIn(600).text(result[2].className + '  -   ' + result[2].probability.toFixed(3));
    });

});
