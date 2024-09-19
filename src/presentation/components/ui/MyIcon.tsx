import { Ionicons } from '@expo/vector-icons';


interface Props{
    name: string;
    color?: string;
    white?: boolean;
    size?: number;
}

export const MyIcon = ({name, color, white=false, size=22}: Props) => {
    return (
        <Ionicons color={color} size={size} />
    );
}