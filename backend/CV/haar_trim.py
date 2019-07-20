import cv2, os, shelve
import numpy as np

def main():
  path = "/home/spencer/Desktop/2Good2BTrue/backend/data/clips/"
  clips = [clip for clip in os.listdir(path) if os.path.isfile(os.path.join(path, f)) and f[-4:] == '.mp4']

if __name__ == '__main__':
  main()
