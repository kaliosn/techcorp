

        // DECLARE

        const btnSubmit = $("#thebutton")
        btnSubmit.prop("disabled", true)

        let word = $("#exampleName")

        let wd = $("#exampleName").val().length


        // SET FUNCTIONS

        // the button click
        function verify(e) {
            e.preventDefault()
            console.log("Submit")
            console.log(word.val().length)
            let txt = $("<p></p>").text("Vous recherchez << " + word.val() + " >>, votre recherche est en cours.");            
            $(".mycontent").append(txt)
        }

        // the submit button disable
        function openSub(e) {
            e.preventDefault()
            console.log("press")
            btnSubmit.prop("disabled", false)
        }

        
        // CALL

        word.on("input", "",  openSub)

        $("#form-search").on("submit", "", verify)

    