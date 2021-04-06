const employees = [
    {
        id: 1,
        firstName: "Леонид",
        lastName: "Старокадомский",
        middleName: "Михайлович",
        birthDate: "1875-03-27",
        phone: "+79975669545"
    },
    {
        id: 2,
        firstName: "Владимир",
        lastName: "Демихов",
        middleName: "Петрович",
        birthDate: "1916-06-18",
        phone: "+74951263366"
    },
    {
        id: 3,
        firstName: "Виктор",
        lastName: "Калнберз",
        middleName: "Константинович",
        birthDate: "1928-06-02",
        phone: "+37156698963"
    },
    {
        id: 4,
        firstName: "Алоис",
        lastName: "Альцгеймер",
        middleName: "Эдуардович",
        birthDate: "1864-06-14",
        phone: "+15559665599"
    },
    {
        id: 5,
        firstName: "Авиценна",
        lastName: "Сина",
        middleName: "Абу Али Ибн",
        birthDate: "980-08-23",
        phone: "+15559171855"
    },
    {
        id: 6,
        firstName: "Александр",
        lastName: "Флеминг",
        middleName: "Хугович",
        birthDate: "1881-08-06",
        phone: "+4569988569"
    }
];

const worklog = [
    {
        id: 1,
        employee_id: 1,
        from: "2021-03-04 04:44:44",
        to: "2021-03-04 06:46:09"
    },
    {
        id: 2,
        employee_id: 1,
        from: "2021-03-04 06:55:01",
        to: "2021-03-04 08:13:10"
    },
    {
        id: 3,
        employee_id: 1,
        from: "2021-03-04 09:11:45",
        to: "2021-03-04 10:55:34"
    },
    {
        id: 4,
        employee_id: 1,
        from: "2021-03-04 11:31:54",
        to: "2021-03-04 13:36:34"
    },
    {
        id: 5,
        employee_id: 1,
        from: "2021-03-04 14:40:52",
        to: "2021-03-04 21:31:27"
    },
    {
        id: 6,
        employee_id: 1,
        from: "2021-03-04 21:32:16",
        to: "2021-03-04 22:13:47"
    },
    {
        id: 7,
        employee_id: 1,
        from: "2021-03-04 22:44:21",
        to: "2021-03-04 22:47:15"
    },
    {
        id: 8,
        employee_id: 1,
        from: "2021-03-04 23:27:07",
        to: "2021-03-04 23:41:45"
    },
    {
        id: 9,
        employee_id: 1,
        from: "2021-03-04 23:41:54",
        to: "2021-03-04 23:44:51"
    },
    {
        id: 10,
        employee_id: 1,
        from: "2021-03-04 23:53:00",
        to: "2021-04-04 01:15:22"
    },
    {
        id: 11,
        employee_id: 2,
        from: "2021-03-04 03:44:44",
        to: "2021-03-04 03:46:09"
    },
    {
        id: 12,
        employee_id: 2,
        from: "2021-03-04 03:55:01",
        to: "2021-03-04 08:13:10"
    },
    {
        id: 13,
        employee_id: 2,
        from: "2021-03-04 09:11:43",
        to: "2021-03-04 10:55:37"
    },
    {
        id: 14,
        employee_id: 2,
        from: "2021-03-04 10:56:54",
        to: "2021-03-04 13:36:34"
    },
    {
        id: 15,
        employee_id: 2,
        from: "2021-03-04 13:40:52",
        to: "2021-03-04 15:31:27"
    },
    {
        id: 16,
        employee_id: 2,
        from: "2021-03-04 15:32:16",
        to: "2021-03-04 16:13:47"
    },
    {
        id: 17,
        employee_id: 3,
        from: "2021-03-04 00:00:16",
        to: "2021-03-04 12:00:47"
    },
    {
        id: 18,
        employee_id: 3,
        from: "2021-03-04 12:33:56",
        to: "2021-03-04 20:11:11"
    },
    {
        id: 19,
        employee_id: 4,
        from: "2021-03-04 00:12:12",
        to: "2021-03-04 04:07:09"
    },
    {
        id: 20,
        employee_id: 4,
        from: "2021-03-04 06:33:25",
        to: "2021-03-04 08:56:12"
    },
    {
        id: 21,
        employee_id: 4,
        from: "2021-03-04 09:02:45",
        to: "2021-03-04 10:11:11"
    },
    {
        id: 22,
        employee_id: 4,
        from: "2021-03-04 11:12:10",
        to: "2021-03-04 13:36:34"
    },
    {
        id: 23,
        employee_id: 4,
        from: "2021-03-04 13:16:52",
        to: "2021-03-04 14:31:27"
    },
    {
        id: 24,
        employee_id: 4,
        from: "2021-03-04 16:32:16",
        to: "2021-03-04 19:13:59"
    },
    {
        id: 25,
        employee_id: 4,
        from: "2021-03-04 19:44:21",
        to: "2021-03-04 22:54:15"
    },
    {
        id: 26,
        employee_id: 4,
        from: "2021-03-04 23:27:19",
        to: "2021-03-04 23:41:30"
    },
    {
        id: 27,
        employee_id: 5,
        from: "2021-03-04 11:12:12",
        to: "2021-03-04 12:07:09"
    },
    {
        id: 28,
        employee_id: 5,
        from: "2021-03-04 12:32:25",
        to: "2021-03-04 12:56:13"
    },
    {
        id: 29,
        employee_id: 5,
        from: "2021-03-04 14:02:17",
        to: "2021-03-04 14:11:08"
    },
    {
        id: 30,
        employee_id: 5,
        from: "2021-03-04 15:12:19",
        to: "2021-03-04 16:33:33"
    },
    {
        id: 31,
        employee_id: 5,
        from: "2021-03-04 18:25:52",
        to: "2021-03-04 20:31:12"
    },
    {
        id: 32,
        employee_id: 5,
        from: "2021-03-04 20:32:20",
        to: "2021-03-04 21:21:21"
    },
    {
        id: 33,
        employee_id: 5,
        from: "2021-03-04 22:44:21",
        to: "2021-03-04 22:54:15"
    },
    {
        id: 34,
        employee_id: 5,
        from: "2021-03-04 22:59:19",
        to: "2021-03-04 23:29:30"
    },
    {
        id: 35,
        employee_id: 6,
        from: "2021-03-04 02:15:44",
        to: "2021-03-04 04:46:09"
    },
    {
        id: 36,
        employee_id: 6,
        from: "2021-03-04 17:26:01",
        to: "2021-03-04 08:17:10"
    },
    {
        id: 37,
        employee_id: 6,
        from: "2021-03-04 09:29:45",
        to: "2021-03-04 11:32:34"
    },
    {
        id: 38,
        employee_id: 6,
        from: "2021-03-04 11:39:07",
        to: "2021-03-04 13:39:07"
    },
    {
        id: 39,
        employee_id: 6,
        from: "2021-03-04 14:15:52",
        to: "2021-03-04 19:01:08"
    },
    {
        id: 40,
        employee_id: 6,
        from: "2021-03-04 19:32:47",
        to: "2021-03-04 20:55:47"
    },
    {
        id: 41,
        employee_id: 6,
        from: "2021-03-04 22:59:00",
        to: "2021-03-04 23:09:15"
    },
    {
        id: 42,
        employee_id: 6,
        from: "2021-03-04 23:27:05",
        to: "2021-03-04 23:30:45"
    },
    {
        id: 43,
        employee_id: 6,
        from: "2021-03-04 23:30:54",
        to: "2021-03-04 23:50:01"
    },
    {
        id: 44,
        employee_id: 6,
        from: "2021-04-04 00:53:00",
        to: "2021-04-04 04:15:22"
    }
];

const data = {
    "/api/employees": employees,
    "/api/employees/worklog": worklog
};

function delay(val) {
    return new Promise((res, rej) => setTimeout(val ? res : rej, 500, val));
}

export function mockFetch(url) {
    const payload = data[url];

    return delay(payload);
}
