const opponent_paper = document.getElementById('opponent_paper');
const opponent_rock = document.getElementById('opponent_rock');
const opponent_scissor = document.getElementById('opponent_scissor');

const player_paper = document.getElementById('player_paper');
const player_rock = document.getElementById('player_rock');
const player_scissor = document.getElementById('player_scissor');

const paper_btn = document.getElementById('paper_btn');
const rock_btn = document.getElementById('rock_btn');
const scissors_btn = document.getElementById('scissors_btn');

paper_btn.addEventListener('click' , () =>{
    let bot_hand = Math.floor(Math.random() * 3)

    player_paper.style.display='block'

    setTimeout(() => {
        player_paper.style.transform='translateY(0)'    
    }, 100);

    // 0 = paper
    // 1 = rock
    // 2 = scissor

    if (bot_hand == 0) {
        opponent_paper.style.display='block'

        setTimeout(() => {
            opponent_paper.style.transform='translateY(0) rotateX(180deg)'
        }, 100);

        setTimeout(() => {
            alert('Tie');
            location.reload();
        }, 800);

    } else if (bot_hand == 1) {
        opponent_rock.style.display='block'

        setTimeout(() => {
            opponent_rock.style.transform='translateY(0) rotateX(180deg)'
        }, 100);

        setTimeout(() => {
            alert('You win');
            location.reload();
        }, 800);

    } else if (bot_hand == 2) {
        opponent_scissor.style.display='block'

        setTimeout(() => {
            opponent_scissor.style.transform='translateY(0) rotateX(180deg)'
        }, 100);

        setTimeout(() => {
            alert('You lose');
            location.reload();
        }, 800);
    }

})

rock_btn.addEventListener('click' , () =>{
    let bot_hand = Math.floor(Math.random() * 3)

    player_rock.style.display='block'

    setTimeout(() => {
        player_rock.style.transform='translateY(0)'    
    }, 100);

    // 0 = paper
    // 1 = rock
    // 2 = scissor

    if (bot_hand == 0) {
        opponent_paper.style.display='block'

        setTimeout(() => {
            opponent_paper.style.transform='translateY(0) rotateX(180deg)'
        }, 100);

        setTimeout(() => {
            alert('You lose');
            location.reload();
        }, 800);

    } else if (bot_hand == 1) {
        opponent_rock.style.display='block'

        setTimeout(() => {
            opponent_rock.style.transform='translateY(0) rotateX(180deg)'
        }, 100);

        setTimeout(() => {
            alert('Tie');
            location.reload();
        }, 800);

    } else if (bot_hand == 2) {
        opponent_scissor.style.display='block'

        setTimeout(() => {
            opponent_scissor.style.transform='translateY(0) rotateX(180deg)'
        }, 100);

        setTimeout(() => {
            alert('You win');
            location.reload();
        }, 800);
    }

})

scissors_btn.addEventListener('click' , () =>{
    let bot_hand = Math.floor(Math.random() * 3)

    player_scissor.style.display='block'

    setTimeout(() => {
        player_scissor.style.transform='translateY(0)'    
    }, 100);

    // 0 = paper
    // 1 = rock
    // 2 = scissor

    if (bot_hand == 0) {
        opponent_paper.style.display='block'

        setTimeout(() => {
            opponent_paper.style.transform='translateY(0) rotateX(180deg)'
        }, 100);

        setTimeout(() => {
            alert('You win');
            location.reload();
        }, 800);

    } else if (bot_hand == 1) {
        opponent_rock.style.display='block'

        setTimeout(() => {
            opponent_rock.style.transform='translateY(0) rotateX(180deg)'
        }, 100);

        setTimeout(() => {
            alert('You lose');
            location.reload();
        }, 800);

    } else if (bot_hand == 2) {
        opponent_scissor.style.display='block'

        setTimeout(() => {
            opponent_scissor.style.transform='translateY(0) rotateX(180deg)'
        }, 100);

        setTimeout(() => {
            alert('Tie');
            location.reload();
        }, 800);
    }

})