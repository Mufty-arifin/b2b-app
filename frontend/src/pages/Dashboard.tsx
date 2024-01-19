import { PlusIcon } from "@heroicons/react/20/solid";

const secondaryNavigation = [
  { name: "12 months", href: "#", current: false },
  { name: "6 months", href: "#", current: false },
  { name: "3 months", href: "#", current: false },
  { name: "30 days", href: "#", current: true },
  { name: "7 days", href: "#", current: false },
  { name: "24 hours", href: "#", current: false },
];

const stats = [
  {
    name: "Vendors/Supliers",
    value: "1000",
    change: "+23%",
    changeType: "positive",
  },
  {
    name: "Customer/Dealer",
    value: "920",
    change: "-10%",
    changeType: "negative",
  },
  {
    name: "Product SKU",
    value: "620",
    change: "23%",
    changeType: "positive",
  },
  {
    name: "Purchase Order",
    value: "3200",
    change: "+23%",
    changeType: "positive",
  },
  {
    name: "Sales Order",
    value: "2000",
    change: "+23%",
    changeType: "positive",
  },
  {
    name: "Repeat Order",
    value: "1900",
    change: "-18%",
    changeType: "negative",
  },
  {
    name: "Open Order",
    value: "100",
    change: "+3%",
    changeType: "positive",
  },
  {
    name: "Cancel Order",
    value: "200",
    change: "-3%",
    changeType: "negative",
  },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const Dashboard = () => {
  return (
    <>
      <div>
        <div className="flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div>
            <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900">
              Dashboard
            </h1>
            <p className="text-gray-400">These companies have a dashboard</p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="#"
              className="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <PlusIcon className="-ml-1.5 h-5 w-5" aria-hidden="true" />
              Import Data
            </a>
          </div>
        </div>
      </div>
      <div className="relative isolate overflow-hidden pt-10">
        {/* Secondary navigation */}
        <header className="pb-4 sm:pb-6">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 sm:flex-nowrap">
            <div className="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-gray-200 sm:leading-7">
              {secondaryNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={item.current ? "text-indigo-600" : "text-gray-700"}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </header>

        <div>
          <dl className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
            {stats.map((stat, statIdx) => (
              <div
                key={stat.name}
                className={classNames(
                  statIdx % 2 === 1
                    ? "sm:border-l"
                    : statIdx === 2
                    ? "lg:border-l"
                    : "",
                  "flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border rounded px-4 py-10 sm:px-6 lg:border xl:px-8"
                )}
              >
                <dt className="text-sm font-medium leading-6 text-gray-500">
                  {stat.name}
                </dt>
                <dd
                  className={classNames(
                    stat.changeType === "negative"
                      ? "text-rose-600"
                      : "text-green-700",
                    "text-xs font-medium"
                  )}
                >
                  {stat.change} Last Month
                </dd>
                <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="flex pt-10">
        <div className="flex-2 w-3/4 border rounded-sm">
          <div className="m-10">
            <h1>Aging - Account Receivable</h1>

            <img
              className="h-50 w-auto"
              src="https://www.datapine.com/documentation/wp-content/uploads/2016/07/stacked-column-chart-example.png"
              alt="Stacked Column Chart Example"
            />
          </div>
        </div>
        <div className="flex-1 border rounded-sm">
          <div className="m-10">
            <div className="flex items-center justify-between">
              <h1>Revenue</h1>
              <a href="#" className="text-sm text-green-600">
                View All {">"}
              </a>
            </div>

            <img
              className=""
              src="https://study.com/cimages/multimages/16/pie_chart_1.JPG"
              alt="Pie Chart Example"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
