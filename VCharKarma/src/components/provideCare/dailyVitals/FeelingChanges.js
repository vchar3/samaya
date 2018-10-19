
export default function feelingChanges(id, value, self) {
    if(id === 'Happy') {
        if(self.state.feeling.isHappy) {
            self.setState({
                feeling: {
                    ...self.state.feeling,
                    isHappy: false
                }
            })
        } else {
            self.setState({
                feeling: {
                    isHappy: true,
                    isSad: false,
                    isTired: false,
                    isSick: false
                },
                todayFeeling: id
            })
        }
    } else if(id === 'Sad') {
        if(self.state.feeling.isSad) {
            self.setState({
                feeling: {
                    ...self.state.feeling,
                    isSad: false
                }
            })
        } else {
            self.setState({
                feeling: {
                    isSad: true,
                    isHappy: false,
                    isTired: false,
                    isSick: false
                },
                todayFeeling: id
            })
        }
    } else if(id === 'Tired') {
        if(self.state.feeling.isTired) {
            self.setState({
                feeling: {
                    ...self.state.feeling,
                    isTired: false
                }
            })
        } else {
            self.setState({
                feeling: {
                    isTired: true,
                    isHappy: false,
                    isSad: false,
                    isSick: false
                },
                todayFeeling: id
            })
        }
    } else if(id === 'Sick') {
        if(self.state.feeling.isSick) {
            self.setState({
                feeling: {
                    ...self.state.feeling,
                    isSick: false
                }
            })
        } else {
            self.setState({
                feeling: {
                    isSick: true,
                    isHappy: false,
                    isSad: false,
                    isTired: false
                },
                todayFeeling: id
            })
        }
    }
};
