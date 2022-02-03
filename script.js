$(document).ready(function(){
    // Functions to add and remove effect class in span - Copy
    function add(){
        $(".done").addClass("bounce-effect").text("Copied!");
    }
    function remove(){
        $(".done").removeClass("bounce-effect");
    }

    // Functions to add and remove effect class in span - Paste
    function addPaste(){
        $(".done").addClass("bounce-effect").text("Pasted!");
    }
    function removePaste(){
        $(".done").removeClass("bounce-effect");
    }

    // Call the functions and copy the text on Button click
    $(".copy-btn").click(function(){
        $("#text-field").select();
        document.execCommand("copy");
        add();
        setTimeout(remove, 800);
    });

    // Call the functions and paste the text on Button click
    $(".paste-btn").click(function(){
        $("#text-field").focus();
        $("#text-field").select();
        document.execCommand("paste");
        console.log($("#text-field").textContent);
        addPaste();
        setTimeout(removePaste, 800);
    });
})