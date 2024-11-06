export function StudentInfo(props) {
    return (
      <div>
        <div>
          {props.lastName}, {props.firstName}
        </div>
        <ul>
          <li>
            <strong>ID:</strong> {props.id}
          </li>
          <li>
            <strong>School:</strong> {props.school}
          </li>
          <li>
            <strong>Major:</strong> {props.major}
          </li>
        </ul>
      </div>
    );
  }
