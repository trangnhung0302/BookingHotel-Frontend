/**
 * Message defination
 */
export default {
    get: function (code, params) {
      let template = this[code] || '';
      for (const [key, value] of Object.entries(params)) {
        template = template.replace(new RegExp(`{${key}}`, 'g'), value);
      }
      return template;
    },
  
    // validation error message
    1111: 'Please enter {attr}',
    1112: 'Please choose {attr}',
    1113: 'Please add {attr}',
  
    1121: 'Please enter {attr} at least {min} characters.',
    1122: 'Please enter {attr} in {max} characters or less.',
    1123: 'Please enter {min} characters or more and {max} characters or less for {attr}',
    1124: 'Enter {attr} in {max} digits or less',
    1125: 'Please enter {length} characters for {attr}',
  
    1131: 'Please enter {attr} with {min} or more',
    1132: 'Please enter {attr} within {max}.',
    1133: 'Please enter {attr} between {min} and {max}.',
    1134: 'Please enter {min} to {max} for {attr}.',
    1135: 'Please enter {attr} with a date earlier than {max}.',
  
    1141: 'Please enter {attr} in the correct format.',
    1142: '{attr} must contain at least one letter, number, and symbol.',
    1143: '{attr} does not match.',
    1144: '{attr} contains invalid characters.',
    1145: 'Enter {attr} using only half-width alphanumeric characters, underscores (_), and periods (.).',
  
    1151: 'Please enter {attr} in single-byte numbers.',
    1152: '{attr}は半角英字で入力してください。',
    1153: '{attr}は半角英数字で入力してください。',
    1154: '{attr}は半角英数字記号で入力してください。',
    1155: '{attr}は全角カタカナで入力してください。',
  
    1161: '{attr}は{attr_to}より小さい値で入力してください。',
    1162: '{attr}は{attr_to}より後の時間で入力してください。',
    1163: '公開日時は非公開日時より前の日時を設定してください。',
    1164: '公開日時は現在の日時より前の日時を設定できません。',
    1165: '{attr}は{attr_to}の同日か先の日時を指定してください。',
  
    1171: '{attr}に重複した内容を入力しないでください。',
  
    1181: '無効な{attr}は選択できません。',
  
    1182: '{attr}は15分単位で設定してください。',
  
    1191: '{attr}は0より大きい値にしてください。',
    1166: 'コースの有効期間(To)はコースの有効期間(From)より前の時間を設定できません。'
  };
  