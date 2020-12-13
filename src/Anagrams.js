import React, { Component } from 'react'

class Anagrams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            isEdit: false,
            arrTotal: []
        }
        this.isAnagram = this.isAnagram.bind(this);
        this.groupByAnagram = this.groupByAnagram.bind(this);
    }

    isAnagram(text1, text2) {
        debugger
        if (text1.length !== text2.length) {
            return false
        }
        while (text1.length !== 0) {
            debugger
            var index = text2.indexOf(text1[0])
            if (index === -1) {
                return false
            }
            debugger
            text1 = text1.substring(1, text1.length)
            text2 = text2.substring(0, index) + text2.substring(index + 1, text2.length)
        }
        return true
    }

    groupByAnagram(array) {
        var anagramArray = []
        var arrayIndex = []
        var anagramValue = array[0]
        anagramArray.push(anagramValue)
        array.splice(0, 1)
        array.forEach((value, index) => {
            if (this.isAnagram(anagramValue, value)) {
                anagramArray.push(value)
                arrayIndex.push(index)
            }
        })
        var i = 0
        arrayIndex.forEach((value, index) => {
            array.splice(value - i, value + 1 - i)
            i++
        })
        return anagramArray
    }



    componentDidMount() {
        var array = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
        var newArray = []
        while (array.length !== 0) {
            newArray.push(this.groupByAnagram(array))
        }

        console.log(newArray)
    }

    componentWillMount() {

    }


    render() {
        return (
            <div>See F12 / Inspact element on Console Section to see Output Array</div>
        )
    }
}

export default (Anagrams)