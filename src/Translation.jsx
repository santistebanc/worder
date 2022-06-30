function Translation({ text, iso }) {
  return text ? (
    <div className="flex items-center my-3">
      <img
        src={iso && `https://unpkg.com/language-icons/icons/${iso}.svg`}
        width={24}
        className="m-1 rounded"
      />
      <span className="flex-1 mx-2">{text}</span>
    </div>
  ) : null;
}

export default Translation;
