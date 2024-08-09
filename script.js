document.getElementById('evaluationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const rank = document.getElementById('rank').value;
    const photoFile = document.getElementById('photo').files[0];

    const idNumber = '#' + Math.floor(100000 + Math.random() * 900000);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <div class="userContainer">
            <div>
                <img id="userPhoto" alt="User Photo"/>
            </div>
            <div>
                <p>ID: ${idNumber}</p>
                <p>User Name: ${name}</p>
            </div>
        </div>
        <h2>Congratulations!! You have secured <span id="userRank">${rank}</span></h2>
    `;

    const reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById('userPhoto').src = e.target.result;
        document.getElementById('userRank').style.color = "black";
        document.getElementById('userRank').style.fontWeight = "bolder";    
        document.getElementById('userContainer').style.display = "flex";
        document.getElementById('userContainer').style.flexDirection = "row";
        document.getElementById('userContainer').style.justifyContent = "space-between";
    };
    reader.readAsDataURL(photoFile);

});


document.getElementById('evaluationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    setTimeout(() => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.html(outputDiv, {
            callback: function (doc) {
                doc.save('evaluation.pdf');
            },
            x: 10,
            y: 10
        });
    }, 500);
});
