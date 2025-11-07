interface Props {
  onPress: () => void;
  text: string;
  icon?: boolean;
}

export function GradientButton({ onPress, text, icon }: Props) {
  return (
    <button className="gradient-button" onClick={onPress}>
      <div className="content">
        {icon ? (
          <img src="/src/assets/icons/add.svg" height={16} width={16} />
        ) : null}
        <p>{text}</p>
      </div>
    </button>
  );
}
