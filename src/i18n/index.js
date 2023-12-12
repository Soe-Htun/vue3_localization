// langService.js
import { ref } from 'vue';

const currentLang = ref('en');

const setLanguage = (lang) => {
    currentLang.value = lang;
};

const getLanguage = () => {
    return currentLang.value;
};

export { setLanguage, getLanguage };
