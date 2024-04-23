import UserDto from "../data/DataTransferObjects/UserDto";

const AvatarCell = (props: {user: Partial<UserDto>}) => {
    return (
      <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10">
          <img className="h-10 w-10 rounded-full" src={"/img/thispersondoesnotexist.jpg"} alt={props.user.emailAddress} />
        </div>
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">{props.user.emailAddress}</div>
          <div className="text-sm text-gray-500">{props.user.firstName} {props.user.lastName}</div>
        </div>
      </div>
    )
}

export default AvatarCell;