import { Feed } from '../../components/feed/Feed';
import { RightBar } from '../../components/rightbar/RightBar';
import { ProfileMenu } from '../../components/profileMenu/ProfileMenu';


export const Profile = () => {
	return (
		<>
			<ProfileMenu>
				<Feed />
				<RightBar profile />
			</ProfileMenu>
		</>
	);
};
