import axios from "axios";

import {
	MESSAGES_USER_REQUEST,
	MESSAGES_USER_SUCCESS,
	MESSAGES_USER_FAILURE,
	MESSAGE_GET_REQUEST,
	MESSAGE_GET_SUCCESS,
	MESSAGE_GET_FAILURE,
	MESSAGE_SEND_REQUEST,
	MESSAGE_SEND_SUCCESS,
	MESSAGE_SEND_FAILURE,
} from "../constants/messagesConstants";

export const getMessages = (user_id) => async (dispatch, getState) => {
	try {
		dispatch({ type: MESSAGES_USER_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`/back/api/messages/${user_id}`, config);

		dispatch({ type: MESSAGES_USER_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: MESSAGES_USER_FAILURE,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const getMessage =
	(user_id, message_id) => async (dispatch, getState) => {
		try {
			dispatch({ type: MESSAGE_GET_REQUEST });

			const {
				userLogin: { userInfo },
			} = getState();

			const config = {
				headers: {
					Authorization: `Bearer ${userInfo.token}`,
				},
			};

			const { data } = await axios.get(
				`/back/api/messages/${user_id}/${message_id}`,
				config
			);

			dispatch({ type: MESSAGE_GET_SUCCESS, payload: data });
		} catch (error) {
			dispatch({
				type: MESSAGE_GET_FAILURE,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};

export const sendMessage =
	(email, subject, content) => async (dispatch, getState) => {
		try {
			dispatch({ type: MESSAGE_SEND_REQUEST });

			const message = {
				to: email,
				subject,
				content,
			};

			const {
				userLogin: { userInfo },
			} = getState();

			const config = {
				headers: {
					Authorization: `Bearer ${userInfo.token}`,
				},
			};
			const { data } = await axios.post(`/back/api/messages/`, message, config);

			dispatch({ type: MESSAGE_SEND_SUCCESS, payload: data });
		} catch (error) {
			dispatch({
				type: MESSAGE_SEND_FAILURE,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};
