// url = 'https://opentdb.com/api.php?amount=10&category=31&difficulty=medium&type=multiple';
// async function getQuestions(){
//     response = await fetch(url);
//     data = await response.json();
//     questions = data['results'];
//     console.log(questions);
//     for(row of questions){
//         q = row['question'];
//         let decoded = new DOMParser().parseFromString(q, "text/html").body.textContent;
//         console.log(decoded);
//     }
// }