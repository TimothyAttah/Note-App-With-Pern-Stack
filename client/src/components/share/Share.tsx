import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import {
	EmojiEmotions,
	Label,
	PermMedia,
	Room,
	Cancel,
	Person,
} from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/actions/posts';
import { user, fullName } from '../NameInitials';
import {
	ShareContainer,
	ShareButton,
	ShareBottom,
	ShareOption,
	ShareOptions,
	ShareImgContainer,
	ShareTop,
	FileLabel,
	HR,
} from './Styles';

export const Share = () => {
	const dispatch = useDispatch();
	const [desc, setDesc] = useState('');
	const [img] = useState();

	const [file, setFile] = useState('');
	const [uploadedFile, setUploadedFile] = useState({});

	const onChange = (e: any) => {
		setFile(e.target.files[0]);
	};

	// React.Dispatch<React.SetStateAction<string>>
	// HTMLInputElement.files: FileList | null
// React.ChangeEvent<HTMLInputElement>.target: EventTarget & HTMLInputElement

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('file', file);

		try {
			const res = await axios.post('/upload', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			const { fileName, filePath } = res.data;

			setUploadedFile({ fileName, filePath });

			const newPost = {
				userId: user?._id,
				desc,
				img: fileName,
			};
			dispatch(createPost(newPost));
			setDesc('');
			// setFile(null);
			setFile('');
		} catch (err) {
			if (err.response.status === 500) {
				console.log('There was a problem with the server');
			} else {
				console.log(err.response.data.msg);
			}
		}
	};

	return (
		<ShareContainer>
			<ShareTop>
				{user?.profilePicture ? (
					<img
						src={user?.profilePicture}
						alt=''
						className='share__profile-img'
					/>
				) : (
					<Person />
				)}

				<input
					placeholder={`What's on your mind ${fullName}?`}
					className='share__input'
					name='desc'
					value={desc}
					onChange={e => setDesc(e.target.value)}
				/>
			</ShareTop>
			<HR />

			{file && (
				<ShareImgContainer>
					<img src={URL.createObjectURL(file)} alt='' />
					<Cancel color='inherit' onClick={() => setFile('')} />
				</ShareImgContainer>
			)}
			<ShareBottom onSubmit={onSubmit}>
				<ShareOptions>
					<FileLabel htmlFor='file'>
						<PermMedia htmlColor='tomato' />
						<span className='share__option-text'>Photo or Video</span>
						<input
							type='file'
							id='file'
							accept='.png, .jpg, .jpeg'
							// value={file}
							onChange={onChange}
						/>
					</FileLabel>
					<ShareOption>
						<Label htmlColor='blue' />
						<span className='share__option-text'>Tag</span>
					</ShareOption>
					<ShareOption>
						<Room htmlColor='green' />
						<span className='share__option-text'>Location</span>
					</ShareOption>
					<ShareOption>
						<EmojiEmotions htmlColor='goldenrod' />
						<span className='share__option-text'>Feelings</span>
					</ShareOption>
				</ShareOptions>
				<ShareButton>
					<Button type='submit' variant='contained'>
						Share
					</Button>
				</ShareButton>
			</ShareBottom>
		</ShareContainer>
	);
};
