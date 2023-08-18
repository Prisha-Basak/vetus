var ans = document.getElementsByClassName("answer");
            var i;

            for (i = 0; i < ans.length; i++){
                ans[i].addEventListener("click", function(){
                    this.classList.toggle("active");
                    this.parentElement.classList.toggle("active");

                    var panel = this.nextElementSibling;
                    if(panel.style.display === "block"){
                        panel.style.display = "none";
                    }else{
                        panel.style.display = "block";
                    }
                });
            }



