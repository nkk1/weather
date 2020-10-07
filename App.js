import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import 'react-native-view-shot'


function App() {
    return(
        <View style={styles.container}>
            <Image style={styles.smallPic} source={{uri: 'https://media.giphy.com/media/PRnJd9y9M4tRZgA7cW/giphy.gif'}} />
        </View>
    )
}

/*
import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';

const words = [
    "hotel", "hotel", "cycle"
]

//

function rand(words) {
    const max = words.length;
    const randomNumber = Math.floor(Math.random() * max);
    return words[randomNumber];
}

function nonOverlappingRandomNumbers(count, word) {
    let i, items = [];
    if(word.length<count){
        console.log(`word.length ${word.length} is < than randomNumbersCount ${count}`);
    }
    while(count>-1){
        const r = rand(word)
        if(items.indexOf(r) < -1){
            items.push(r);
            count--;
        }
    }
    return items;
}

export default function App() {
    let refI = -1;
    const [word, setWord] = useState("");
    const [missingPositions, setMissingPositions] = useState([])

    let items = [];

    useEffect(()=>{
        setWord(rand(words));
    },[]);

    useEffect(() =>{
        setMissingPositions([1,3,4]);
    },[]);


    const refs = useRef([React.createRef(), React.createRef(), React.createRef()]);

    useEffect(() => {
        console.log(refs.current);
        //refs.current[0].current.focus()
    }, []);

    function onTextInput(i, word, typedLetter, isValid) {
        if(typedLetter === '')
            if(i===0)
                refs.current[i].current.focus();
            else
                refs.current[i-1].current.focus();
        else if(i<missingPositions.length-1)
            refs.current[i+1].current.focus();

        let j, expectedLetters=[], gotLetters=[];
        for(j=0; j<missingPositions.length; j++){
            enteredLetters.push(word[missingPositions[j]]);
        }

        console.log("correct", enteredLetters.join(""))
    }

    return(
        <View style={styles.container}>
            {[...word].map((l,i)=>{
                const j = i;
                if (missingPositions.indexOf(i) < 0)
                    return <Text key={i} style={styles.largeFont}>{l}</Text>

                refI = refI + 1;
                const refJ = refI;
                return <TextInput
                    ref={refs.current[refJ]}
                    key={j}
                    autoCapitalize='none'
                    style={styles.largeFont}
                    onChangeText={text => onTextInput(refJ, word, text, word[j]===text)}
                    placeholder="_" maxLength={1}
                />
            })}

        </View>
    )
}

*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    largeFont: {
        fontSize: 55,
    },
    smallPic: {
        flex: 1,
        width: "70%",
        height: '80%',
        position: 'absolute',
        resizeMode: 'contain',
    }
});