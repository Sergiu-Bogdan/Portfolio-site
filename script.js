// Arrays that will form the messages

const people = ['You', 'Every student', 'Each person', 'Anyone', 'Everyone', 'Each learner', 'Every individual', 'All people', 'Each human being', 'Every person'];

const qualities = ['have incredible potential', 'deserve recognition', 'can achieve great things', 'are making progress', 'should feel proud', 'have unique strengths', 'are capable of growth',
                   'deserve encouragement', 'can overcome challenges', 'are valuable and important'];

const contexts = ['in everything you do', 'when you try your best', 'through hard work', 'by believing in yourself', 'with practice and patience', 'in your own special way', 'by taking small steps',
                  'through perseverance', 'with support from others', 'by celebrating small wins'];


// GetRandom function

function getRandomMessage () {
    const person = people[Math.floor(Math.random() * people.length)];
    const quality = qualities[Math.floor(Math.random() * qualities.length)];
    const context = contexts[Math.floor(Math.random() * contexts.length)];

    return `${person} ${quality} ${context}.`
}
// Display message function
function displayRandomMessage() {
    const message = getRandomMessage();
    const messageDisplay = document.getElementById('messageDisplay');
    messageDisplay.innerHTML = `<p>${message}</p>`;
}