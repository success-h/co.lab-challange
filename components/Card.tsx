// import { Stack } from "@nature-ui/core";
import { useRouter } from "next/router";
import moment from "moment";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Stack } from "@nature-ui/core";

type Props = {
  event: EventDataTypes;
};

const Card = ({ event }: Props) => {
  const month = moment(event.date).format("MMM");
  const day = moment(event.date).format("DD");
  const router = useRouter();

  const formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  return (
    <div
      data-aos="fade-up"
      className="max-w-[380px] rounded-lg bg-[#000] hover:shadow-md border-[#504e4e] border overflow-hidden m-6"
    >
      <div className="max-h-[200px] flex w-full overflow-hidden mb-1">
        <Image
          className="hover:scale-105 transition-all overflow-hidden duration-500"
          height={200}
          width={400}
          src={event?.image}
          alt={event?.title}
          loading="lazy"
        />
      </div>
      <div className="z-10 flex px-4 pt-2 flex-col">
        <div className="items-center flex flex-row justify-between">
          <p
            style={{
              fontFamily: "Sans-serif",
            }}
            className="text-lg text-purple-400 font-bold"
          >
            {event.title}
          </p>
          {router.pathname === "/dashboard" && (
            <div className="flex flex-col items-center justify-center rounded-sm py-1 px-4 bg-gray-200">
              <p className="text-xl font-sans font-bold text-rose-400">
                {month}
              </p>
              <p className="text-sm">{day}</p>
            </div>
          )}
        </div>
        {router.pathname === "/dashboard" && (
          <div className="flex items-center justify-between my-4">
            <div className="">
              <p className="text-gray-300 text-sm">Sold Tickets</p>
              <p className="text-rose-500 text-lg">
                {event.total_sold_tickets ? event.total_sold_tickets : 0}
              </p>
            </div>
            <div className="">
              <p className="text-gray-300 text-sm">Available Tickets</p>
              <p className="text-rose-500 text-lg">
                {event.total_ticket_count - event.total_sold_tickets}
              </p>
            </div>
          </div>
        )}

        {router.pathname !== "/dashboard" && (
          <div className="flex flex-col h-10 py-1 justify-between mb-4">
            {event ? (
              <div className="flex justify-between">
                <div className="font-medium text-purple-200 text-sm">
                  {event.lowest_price === event.highest_price ? (
                    <p className="">{formatter.format(event.lowest_price)}</p>
                  ) : (
                    <div>
                      {formatter.format(event.lowest_price)} -{" "}
                      {formatter.format(event.highest_price)}
                    </div>
                  )}
                </div>
                <div className="">
                  <p className="text-md font-bold text-gray-800">{`${
                    !event?.total_sold_tickets ? 0 : event?.total_sold_tickets
                  }/${event?.total_ticket_count} SOLD`}</p>
                </div>
              </div>
            ) : (
              <p className="font-medium text-sky-700 text-md">Free event</p>
            )}

            <p className="flex-1 text-xs">
              {moment(event.date).format("MMMM Do YYYY.")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
