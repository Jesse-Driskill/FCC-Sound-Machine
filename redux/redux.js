export const CHANGE = "CHANGE";
export const PLAY = "PLAY";

export const changeDisplay = (audioType) => {
    return {
        type: CHANGE, display: audioType
    }
}

export const playAudio = (audioElementId) => {
    return {
        type: PLAY, audioElementId: audioElementId
    }
}

export const displayReducer = (state = {display: ""}, action) => {
    switch (action.type) {
        case CHANGE:
            return {
                display: action.display
            }
            break;
        case PLAY: {
            break;
        }
        default:
            return state;
    }
};

export const mapStateToProps = (state) => {
    return {
        display: state.display
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        changeDisplay: (audioType) => {dispatch(changeDisplay(audioType))}
    }
}