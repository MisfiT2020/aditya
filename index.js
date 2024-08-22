document.addEventListener('DOMContentLoaded', function() {
    // Function to wrap each letter in a span
    function wrapLetters(id) {
      let textElement = document.getElementById(id);
      let text = textElement.innerText;
      let wrappedText = '';
      for (let i = 0; i < text.length; i++) {
        wrappedText += '<span class="letter">' + text[i] + '</span>';
      }
      textElement.innerHTML = wrappedText;
    }
  
    // Function to animate each letter
    function animateText(id) {
      let letters = document.querySelectorAll(`#${id} .letter`);
      letters.forEach(function(letter, index) {
        setTimeout(function() {
          letter.classList.add('animate');
        }, 100 * index); // Adjust the delay here (100ms for slower animation)
      });
    }
  
    // Initial setup
    wrapLetters('role');
  
    // Animate "Full Stack Developer"
    animateText('role');
  });
  
  
  
  
  
  
  const readMoreBtn = document.getElementById('read-more-btn');
        const moreContent = document.getElementById('more-content');

        readMoreBtn.addEventListener('click', function() {
            if (moreContent.style.display === 'none' || moreContent.style.display === '') {
                document.addEventListener('DOMContentLoaded', function() {
                    // Function to wrap each letter in a span
                    function wrapLetters(id) {
                      let textElement = document.getElementById(id);
                      let text = textElement.innerText;
                      let wrappedText = '';
                      for (let i = 0; i < text.length; i++) {
                        wrappedText += '<span class="letter">' + text[i] + '</span>';
                      }
                      textElement.innerHTML = wrappedText;
                    }
                  
                    // Function to animate each letter
                    function animateText(id) {
                      let letters = document.querySelectorAll(`#${id} .letter`);
                      letters.forEach(function(letter, index) {
                        setTimeout(function() {
                          letter.classList.add('animate');
                        }, 100 * index); // Adjust the delay here (100ms for slower animation)
                      });
                    }
                  
                    // Initial setup
                    wrapLetters('role');
                  
                    // Animate the text
                    animateText('role');
                  });
                  moreContent.style.display = 'block';
                readMoreBtn.textContent = 'Read less';
            } else {
                moreContent.style.display = 'none';
                readMoreBtn.textContent = 'Read more';
            }
        });
    // Get the form and input elements by their IDs
    
    const form = document.querySelector("form");
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    // Function to send an email
    function sendEmail() {
        const bodyMessage = `Full Name: ${fullName.value}<br>Email: ${email.value}<br>Phone Number: ${phone.value}<br>Message: ${message.value}`;

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "medisettiaditya57@gmail.com",
            Password: "87FFC166289961E3BB6FA59F679F01ABBB50",
            To: 'medisettiaditya57@gmail.com',
            From: "medisettiaditya57@gmail.com",
            Subject: subject.value,
            Body: bodyMessage
        }).then(
            message => alert(message)
        ).catch(
            error => alert("Failed to send email: " + error)
        );
    }

    // Add event listener to the form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        sendEmail();
    });
;
function wrapLetters(element) {
    const text = element.textContent;
    element.innerHTML = '';
    for (const char of text) {
      const span = document.createElement('span');
      span.classList.add('letter');
      span.textContent = char;
      element.appendChild(span);
    }
  }

  