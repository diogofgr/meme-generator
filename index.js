// inputs:
const memeContainer = document.getElementById('meme-container');
const memeImageInput = document.getElementById('meme-image-input');
const topTextInput = document.getElementById('top-text-input')
const bottomTextInput = document.getElementById('bottom-text-input')
const btnGenerate = document.getElementById('btn-generate');
const btnSave = document.getElementById('btn-save');

// outputs:
const topTextOutput = document.getElementById('top-text-ouput');
const bottomTextOutput = document.getElementById('bottom-text-ouput');
const memeOutput = document.getElementById('meme-output');

btnGenerate.addEventListener('click', () => {
    memeContainer.style.display = 'flex';
    memeOutput.src = '';
    topTextOutput.innerText = topTextInput.value;
    bottomTextOutput.innerText = bottomTextInput.value;

    const imageFile = memeImageInput.files[0];
    const imageSrc = window.URL.createObjectURL(imageFile);

    memeContainer.style.backgroundImage = `url(${imageSrc})`;
    memeContainer.style.backgroundPosition = 'center';
    memeContainer.style.backgroundSize = 'cover';
})

btnSave.addEventListener('click', () => {
    const options = {
        allowTaint: true,
        logging: true,
        profile: true,
        useCORS: true,
        backgroundColor: '#111111'
    }
    html2canvas(memeContainer, options)
        .then((canvas) => {
            const data = canvas.toDataURL('image/jpeg', 1);
            const src = encodeURI(data);
            memeOutput.src = src;
            memeContainer.style.display = 'none';
        })
})

