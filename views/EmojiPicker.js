import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, Button, View } from "react-native";
import EmojiSelector from "react-native-emoji-selector";

export const EmojiPickerView = ({ navigation }) => {
  // Aqui estamos criando um state para o emoji escolhido atualmente.
  const [chosenEmoji, setEmoji] = useState(null);

  // Este método será chamado quando selecionar um emoji
  const handleEmojiSelected = emoji => {
    setEmoji(emoji);
  };

   // Este método será chamado quando nosso quiser continuar com
  // emoji atualmente selecionado - este método não fará nada se o usuário
  // não escolheu um emoji
  const handleContinueButton = () => {
    if (chosenEmoji !== null) {
      navigation.replace("Chat", { emoji: chosenEmoji });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.hint}>
        Escolha um emoji que irá te representar no chat!
        </Text>
        <View
          style={{
            ...styles.emojiContainer,
            ...(chosenEmoji === null ? styles.empty : {})
          }}
        >
          <Text style={styles.emoji}>{chosenEmoji || ""}</Text>
        </View>
        <Button
          // Se o usuário não escolheu um emoji, desativamos o botão continuar
          disabled={chosenEmoji === null}
          style={styles.continueButton}
          title="Continue"
          onPress={handleContinueButton}
        />
      </View>
      <View style={{ height: "50%" }}>
        <EmojiSelector onEmojiSelected={handleEmojiSelected} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  topContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "50%"
  },
  hint: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 32
  },
  continueButton: {
    marginVertical: 64,
    width: 300
  },
  emojiContainer: {
    width: 64,
    height: 64,
    marginVertical: 32
  },
  emoji: {
    width: "100%",
    height: "100%",
    fontSize: 60,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 60
  },
  empty: {
    borderWidth: 5,
    borderStyle: "dashed",
    borderColor: "rgba(0, 0, 0, 0.2)"
  }
});