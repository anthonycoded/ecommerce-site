export function localStringToNumber(s) {
  return Number(String(s).replace(/[^0-9.-]+/g, ""));
}

export function onBlur(e, handleChange) {
  let value = e.target.value;

  let options = {
    maximumFractionDigits: 2,
    currency: "USD",
    style: "currency",
  };

  e.target.value =
    value || value === 0
      ? localStringToNumber(value).toLocaleString(undefined, options)
      : "";

  handleChange("amount", e.target.value);
}

export function formatBirthday(date) {
  const birthday = new Date(date?.replace(/T00:00:00/, ""));
  const day =
    1 +
    Number(
      birthday?.getDate().toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })
    );
  const month =
    1 +
    Number(
      birthday?.getMonth().toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })
    );

  const formattedDate = `${month}-${
    day.length < 10 ? "0" + day : day
  }-${birthday?.getFullYear()}`;

  return formattedDate;
}

export const formatDateYYMMDD = (date) => {
  let newDate = new Date(date);
  const formattedDate =
    newDate?.getFullYear() +
    "-" +
    (newDate?.getMonth() + 1).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }) +
    "-" +
    (newDate?.getDate() + 1).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  return formattedDate;
};

export const phoneNumToString = (phoneNumber) => {
  const string = parseInt(phoneNumber?.replace(/[^0-9]/g, ""), 10).toString();
  return string;
};

export function formatPhoneNumber(phoneNumberString) {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3]; //"(123) 456-7890"
  }
  return null;
}

export function scrollToBottom(id) {
  if (document.getElementById(id)) {
    document.getElementById(id).scrollTop =
      document.getElementById(id).scrollHeight;
  }
}

export const OrderTiles = (accounts, order) => {
  let array;
  if (accounts && order) {
    array = new Array(...accounts);

    return array.sort(function (obj1, obj2) {
      return order.indexOf(obj1.accountId) - order.indexOf(obj2.accountId);
    });
  }
  return array;
};
