document.getElementById('loveCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();

    if (name1 === "" || name2 === "") {
        alert('يرجى إدخال الأسماء بشكل صحيح.');
        return;
    }

    const lovePercentage = Math.floor(Math.random() * 100) + 1;
    const resultMessage = `نسبة الحب بين ${name1} و ${name2} هي ${lovePercentage}%.`;

    let marriageMessage;
    if (lovePercentage > 70) {
        marriageMessage = "يمكنكم التفكير في الزواج! 🎉";
    } else {
        marriageMessage = "ربما تحتاجون إلى مزيد من الوقت. 🕰️";
    }

    document.getElementById('result').textContent = `${resultMessage} ${marriageMessage}`;
});