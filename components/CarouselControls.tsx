import Image from 'next/image';

type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};
const CarouselControls = (props: Props) => {
  return (
    <div className="flex flex-row-reverse justify-between  center-item w-[98%] center-col ">
      <div
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        /* disabled={!props.canScrollPrev} */
        className=""
      >
        <Image
          className="rounded-t-lg"
          src="/images/round-line arrow-white.svg"
          alt="{service.name}"
          width={60}
          height={10}
        />
      </div>
      <div
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        className=""
      >
        <Image
          className="rotate-180"
          src="/images/round-line arrow-white.svg"
          alt="{service.name}"
          width={60}
          height={10}
        />
      </div>
      {/* <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        disabled={!props.canScrollPrev}
        className={classNames({
          'px-4 py-2 text-white rounded-md': true,
          'bg-indigo-200': !props.canScrollPrev,
          'bg-indigo-400': props.canScrollPrev,
        })}
      >
        Prev
      </button> */}
      {/* <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        disabled={!props.canScrollNext}
        className={classNames({
          'px-4 py-2 text-white rounded-md': true,
          'bg-indigo-200': !props.canScrollNext,
          'bg-indigo-400': props.canScrollNext,
        })}
      >
        Next
      </button> */}
    </div>
  );
};
export default CarouselControls;
