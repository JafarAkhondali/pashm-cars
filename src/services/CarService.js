import Http from "./HttpService";

const command  = (statusBool) => {
    return {command: statusBool}
};

export function engineStart(status) {
    let data = command(status);
    return Http().post('/engine', data);
}

export function horn(status) {
    let data = command(status);

    return Http().post('/beep', data);
}

export function water(status) {
    let data = command(status);
    console.log(data);
    return Http().post('/water', data);
}


export function assistant(file) {
    return Http().post('/assistant', {file});
}

export function lockDoors(status) {
    let data = command(status);
    return Http().post('/assistant', status);
}


/**
 *
 * @param position - Can be only lf or rf ( LeftFront - RightFront)
 * @param state - Can be only up, down or stop
 * @returns Promise
 */
export function windowControll(position, state) {
    return Http().post(`/assistant/${position}`, {state});
}
