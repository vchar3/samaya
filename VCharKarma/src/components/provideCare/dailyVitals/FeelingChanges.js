
export default function feelingChanges(id, value, self) {
    if(id === 'Good') {
        if(self.state.feeling.isGood) {
            self.setState({
                feeling: {
                    ...self.state.feeling,
                    isGood: false
                }
            })
        } else {
            self.setState({
                feeling: {
                    isGood: true,
                    isFatigued: false,
                    isTired: false,
                    isSick: false
                },
                todayFeeling: id
            })
        }
    } else if(id === 'Fatigued') {
        if(self.state.feeling.isFatigued) {
            self.setState({
                feeling: {
                    ...self.state.feeling,
                    isFatigued: false
                }
            })
        } else {
            self.setState({
                feeling: {
                    isFatigued: true,
                    isGood: false,
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
                    isGood: false,
                    isFatigued: false,
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
                    isGood: false,
                    isFatigued: false,
                    isTired: false
                },
                todayFeeling: id
            })
        }
    }
};
