let videos = [
    { name: "فاهم 60 | انتصار من رحم الانكسار | مع د. شريف طه يونس", image: "./img/v60.png" ,url:"https://www.youtube.com/watch?v=_iAaHmAdGBw"},
    { name: "فاهم 59 | فلسفة الصوم | مع الشيخ/ أمجد سمير", image: "./img/v59.png" ,url:"https://www.youtube.com/watch?v=uTj3yNF79YI"},
    { name: "فاهم 58 | فقه التعامل مع النعم | مع الشيخ/ هيثم سمير", image: "./img/v58.png" ,url:"https://www.youtube.com/watch?v=_85D3CqkoxA"},
    { name: "فاهم 57 | سلسلة لازم تتحرر - (4) التحرر من العادة | مع الشيخ/ أمجد سمير", image: "./img/v57.png" ,url:"https://www.youtube.com/watch?v=-W6ijtUgXiU"},
    { name: "فاهم 56 | سلسلة لازم تتحرر - (3) التحرر من سلوك القطيع | مع الشيخ/ أمجد سمير", image: "./img/v56.png" ,url:"https://www.youtube.com/watch?v=f8croUJLd3Y"},
    { name: "فاهم 55 | سلسلة لازم تتحرر - (2) التحرر من التفاهة | مع الشيخ/ أمجد سمير", image: "./img/v55.png" ,url:"https://www.youtube.com/watch?v=DdxrQV_bkkY"},
    { name: "فاهم 54 | سلسلة لازم تتحرر - (1) التحرر من الغفلة | مع الشيخ/ أمجد سمير", image: "./img/v54.png" ,url:"https://www.youtube.com/watch?v=agFMbV32JIc"},
    { name: "فاهم 53 | أطفالنا والمساجد .. هل علمناهم الصلاة بحق؟ | مع د. شريف طه يونس", image: "./img/v53.png" ,url:"https://www.youtube.com/watch?v=c6cJ9bbEQa0"},
    { name: "فاهم 52 | كيف تنقذ نفسك من إدمان الإباحية؟ | مع د. محمد عبد الجواد", image: "./img/v52.png" ,url:"https://www.youtube.com/watch?v=NqCQkjgFMqQ&t=14s"},
    { name: " فاهم 51 | حياة المؤمن كبد أم حياة طيبة؟! | مع د. محمد علي يوسف ", image: "./img/v51.png" ,url:"https://www.youtube.com/watch?v=M-T4nHFCOQ4"},
];
let videosSeries = [
    { name: "السيرة النبوية احمد عامر", image: "./img/vs1.png" ,url:"https://www.youtube.com/watch?v=LI99lWP1zac&list=PLATApN30c4aLXpHzO1GkEb9H0CeXaJFy9"},
    { name: "قضاء وقدر سمير مصطفى", image: "./img/vs2.png" ,url:"https://www.youtube.com/watch?v=tldDnDX5UKM&list=PLSUcSqxe9RhyS7_hi2I5D7CH2sACsPjFW"},
    { name: "وعي بودكاست", image: "./img/vs3.png" ,url:"https://www.youtube.com/watch?v=x1XX_S9N4oA&list=PLCpK4282MCT-lBXi4Nodjzq1TDZsK9qwr"},
    { name: "إيه المشكلة لو مش بنصوم رمضان وليه هو مهم كده؟!", image: "./img/vs4.png" ,url:"https://www.youtube.com/watch?v=sZQx9SHhzI4&list=PLlXQj2VGUTmdUP1KDQ9pkmKJU-KDNOkwt"},
    { name: "تأسيس وعي المسلم المعاصر ج1 - م/ أيمن عبد الرحيم", image: "./img/vs5.png" ,url:"https://www.youtube.com/watch?v=INUKb-mPiK4&list=PLnFJTGgdQYTNJLSn8ENSzD9qaPz3LypyW"},
];
function displayBooks() {
    let gridContainer = document.getElementById("videosGrid");
    
    videos.forEach(video => {
        let videoitem = document.createElement("div");
        videoitem.classList.add("video");

        videoitem.innerHTML = `
            <a href="${video.url}" target="_blank" rel="noopener noreferrer" class="video-link"><img src="${video.image}" alt="${video.name}"></a>
            <p>${video.name}</p>
        `;

        gridContainer.appendChild(videoitem);
    });


    let gridSeriesContainer = document.getElementById("videosseriesGrid");
    
    videosSeries.forEach(video => {
        let videoitem = document.createElement("div");
        videoitem.classList.add("video");

        videoitem.innerHTML = `
            <a href="${video.url}" target="_blank" rel="noopener noreferrer" class="video-link overlay"><i class="fa-solid fa-video icon"></i><img src="${video.image}" alt="${video.name}"></a>
            <p>${video.name}</p>
            
        `;

        gridSeriesContainer.appendChild(videoitem);
    });
}

displayBooks(); // Call function to render books