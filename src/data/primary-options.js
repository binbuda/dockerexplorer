const options = [
    { value: 'docker-cli', order: 1, label: 'Docker' },
    { value: 'dokcer-compose-cli', order: 2, label: 'Docker Compose' },
    // { value: 'daemon-cli', order: 3, label: 'Daemon' },
];

export const primaryOptions = options.sort((x, y) => {
    if (x.value < y.value) {
        return -1;
    }
    if (x.value > y.value) {
        return 1;
    }
    return 0;
});
