//heart
const hearts = document.querySelectorAll('.love')
for (const heart of hearts) {
    heart.addEventListener('click', function () {
        let loves = parseInt(document.getElementById('totallove').innerText)
        loves = loves + 1
        document.getElementById('totallove').innerText = loves
    })
}


//copy
const copyers = document.querySelectorAll('.copybtn')
for (const copyer of copyers) {
    copyer.addEventListener('click', function () {
        var tempTag = document.createElement('input')
        tempTag.value = copyer.parentElement.parentElement.querySelector('.numb').innerText
        document.body.appendChild(tempTag)
        tempTag.select()
        document.execCommand('copy')
        document.body.removeChild(tempTag);
        alert(`নম্বর কপি হয়েছে: ${tempTag.value}`);
        var copytotal = parseInt(document.getElementById('copyid').innerText)
        copytotal = copytotal + 1
        document.getElementById('copyid').innerText = copytotal
    })
}



// call 
const callers = document.querySelectorAll('.callbtn')
for (const caller of callers) {
    caller.addEventListener('click', function () {
        console.log(caller.parentElement.parentElement.innerHTML)

        var taka = parseInt(document.getElementById('coin').innerText)
        if (taka !== 0) {
            taka = taka - 20

            var bntitle = caller.parentElement.parentElement.querySelector('.bntitle').innerText
            var entitle = caller.parentElement.parentElement.querySelector('.entitle').innerText
            var numb = caller.parentElement.parentElement.querySelector('.numb').innerText

            alert(`📞 Calling ${entitle + ' ' + numb}...`)
            const currentTime = new Date();
            var dibba = document.createElement('div')
            dibba.innerHTML = `<div class="bg-[#FAFAFA] mb-[7px] flex justify-between items-center p-[14px] rounded-[7px]">
        <div class="">
            <h1 class="tewt-[15px] font-medium">${bntitle}</h1>
            <p class="text-[#5C5C5C] text-[15px]">${numb}</p>
        </div>
        <p id="time" class="text-[15px]">${currentTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}</p>
    </div>`
            document.getElementById('blank').appendChild(dibba)
            document.getElementById('coin').innerText = taka
        }
        else {
            alert('❌ আপনার পর্যাপ্ত কয়েন নেই । কল করতে কমপক্ষে ২০ কয়েন লাগবে । ')
        }
    })
}


// clear 
document.getElementById('clearbtn').addEventListener('click', function () {
    document.getElementById('blank').innerHTML = ''
})
