const StatusCircle = ({ lastCheckIn }: { lastCheckIn: Date }) => {
    const now = new Date();
    const diff = now.getTime() - lastCheckIn.getTime();
    const diffMinutes = Math.floor(diff / 60000);
    const status = diffMinutes < 10 ? 'online' : 'offline';
    return (
        <span
            className={`h-2 w-2 rounded-full ${
                status === 'online' ? 'bg-green-500' : 'bg-red-500'
            }`}
        />
    );
}

export default StatusCircle;