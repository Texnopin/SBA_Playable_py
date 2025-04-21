using System;
using System.Collections;
using System.Collections.Generic;
using _Project.Code.Core.Character;
using _Project.Code.Entry;
using _Project.Code.Services.Input;
using UnityEngine;

namespace _Project.Code.Core.Buyables
{
    public class EndScreenShower : MonoBehaviour
    {
        [SerializeField] private Buyable _fieldBuyable;
        [SerializeField] private GameObject _ui;
        [SerializeField] private Mover _moveInput;
        [SerializeField] private GameObject joystick;
        [SerializeField] private AudioSource _audioSource;

        private bool _isFinished;
        private Coroutine timerCoroutine;
        private float timer = 0f;


        private void Start()
        {
            GlobalEvents.OnEndScreenEvent.AddListener(EndMusic);
        }

        private void Update()
        {
            if(_moveInput.isMoving)
            {
            }

            if (_isFinished) return;

            if (_fieldBuyable.IsBought)
            {
                _isFinished = true;
                StartCoroutine(EndGame());
            }



            /*if (_moveInput.isMoving)
            {
                // Сброс таймера при движении
                if (timerCoroutine != null)
                {
                    StopCoroutine(timerCoroutine);
                    timerCoroutine = null;
                    timer = 0f; // Сброс времени
                }
            }
            else
            {
                // Запуск или продолжение таймера при остановке
                if (timerCoroutine == null)
                {
                    timerCoroutine = StartCoroutine(CountdownTimer());
                }
            }*/
        }

        private IEnumerator EndGame()
        {
            yield return new WaitForSeconds(3f);

            _moveInput._speed = 0f;
            joystick.SetActive(false);
            _ui.SetActive(true);
            GlobalEvents.SendOnEndScreen();
        }

        /*private IEnumerator CountdownTimer()
        {
            timer = 0f; // Сброс времени при запуске корутины
            while (timer < 6f)
            {
                timer += Time.fixedDeltaTime;
                yield return null;
            }
            if(timer >=6f)
            {
                _isFinished = true;
                StartCoroutine(EndGame());
            }
        }*/

        private void EndMusic()
        {
            _audioSource.Play();
        }
    }
}