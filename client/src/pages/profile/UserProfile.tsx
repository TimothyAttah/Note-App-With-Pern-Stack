import { Feed } from '../../components/feed/Feed';
import { RightBar } from '../../components/rightbar/RightBar';
import { ProfileMenu } from '../../components/profileMenu/UserProfileMenu';

export const UserProfile = () => {
	return (
		<>
			<ProfileMenu>
				<Feed profile />
				<RightBar profile />
			</ProfileMenu>
		</>
	);
};
