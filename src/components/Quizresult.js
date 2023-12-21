const Quizresult= (props) => {
    return(
        <>
        <div>
            Your Score:{props.score}<br/>
            Total Score:{props.totalScore}
            
        </div>
        <button onClick={props.tryAgain} id="next-button">Try again</button>
        </>
    )
}
export default Quizresult;