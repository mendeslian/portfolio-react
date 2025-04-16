import Icon from "../Icon";
import useMobile from "../../hooks/useMobile";

export default function HistoryItem({
  historyIcon = "",
  historyTitle = "",
  historyDate = "",
  historyDescription = "",
  historyLink = "",
}) {
  const isMobile = useMobile();

  return (
    <article className="w-full max-w-[810px] flex flex-col gap-[23px]">
      <div className="flex flex-col justify-between items-center md:flex-row">
        <div className="flex items-center justify-center gap-[10px]">
          {!isMobile && (
            <img
              src={historyIcon}
              alt={`${historyTitle} icon`}
              draggable="false"
              loading="lazy"
            />
          )}
          <p className="text-[22px] text-white font-bold text-center md:text-left">
            {historyTitle}
          </p>
          {!isMobile && (
            <a href={historyLink} target="_blank" rel="noopener noreferrer">
              <Icon icon="ArrowUpRight" color="#FFFFFF" />
            </a>
          )}
        </div>
        <span className="text-[15px] text-[#8491A0] font-normal leading-[150%]">
          {historyDate}
        </span>
      </div>
      <p className="w-full text-[15px] text-[#8491A0] font-normal leading-[150%] text-center md:text-left">
        {historyDescription}
      </p>
    </article>
  );
}
