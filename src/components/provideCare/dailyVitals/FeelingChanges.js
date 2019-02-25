
export default function feelingChanges(id, value, self) {
    if(id === 'Good') {
        if(self.state.isGood) {
            self.setState({
                isGood: false
            })
        } else {
            self.setState({
                isGood: true,
                isFatigued: false,
                isTired: false,
                isSick: false,
                todayFeeling: id
            })
        }
    } else if(id === 'Fatigued') {
        if(self.state.isFatigued) {
            self.setState({
                isFatigued: false
            })
        } else {
            self.setState({
                isFatigued: true,
                isGood: false,
                isTired: false,
                isSick: false,
                todayFeeling: id
            })
        }
    } else if(id === 'Tired') {
        if(self.state.isTired) {
            self.setState({
                isTired: false
            })
        } else {
            self.setState({
                isTired: true,
                isGood: false,
                isFatigued: false,
                isSick: false,
                todayFeeling: id
            })
        }
    } else if(id === 'Sick') {
        if(self.state.isSick) {
            self.setState({
                isSick: false
            })
        } else {
            self.setState({
                isSick: true,
                isGood: false,
                isFatigued: false,
                isTired: false,
                todayFeeling: id
            })
        }
    }
};
